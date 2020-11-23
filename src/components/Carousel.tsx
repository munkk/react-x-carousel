import React, { Children } from "react";
import ReactDOM from "react-dom";

import LinkedList from "../models/LinkedList";
import Node from "../models/Node";
import Slide from "../models/Slide";
import getDocument from "../shims/document";
import getWindow from "../shims/window";

import "./Carousel.scss";

const classes = {
  itemCurrent: "x-current",
  itemPast: "x-prev",
  itemFuture: "x-next",
};

const classRemover = new RegExp(
  "\\b(" +
    classes.itemCurrent +
    "|" +
    classes.itemPast +
    "|" +
    classes.itemFuture +
    ")(.*?)(\\s|$)",
  "g"
);

const whiteSpaceRemover = new RegExp("\\s\\s+", "g");

const noop = () => null;

interface Props {
  cellSize?: number;
  autoPlay?: boolean;
  children?: React.ReactChild[];
  useKeyboardArrows?: boolean;
  onRotate?: (node: Node) => void;
}

interface State {
  currentIndex: number;
  initialized: boolean;
}

export default class Carousel extends React.Component<Props, State> {
  private carouselWrapperRef?: HTMLDivElement;
  private sceneRef?: HTMLDivElement;

  list = new LinkedList();
  theta: number = 0;
  radius: number = 0;
  cellsCount: number = 0;

  constructor(props: Props) {
    super(props);

    this.state = {
      currentIndex: 0,
      initialized: false,
    };

    this.buildList();
  }

  componentDidMount() {
    this.setState({ initialized: true });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (!prevState.initialized && this.state.initialized) {
      this.calculateDimension();
      this.changeCarousel();
    }
  }

  componentWillUnmount() {
    this.destroyCarousel();
  }

  buildList() {
    if (!this.props.children) return;

    Children.map(this.props.children, (item, index) => {
      const slide = new Slide(index, item, React.createRef());
      this.list.push(slide);
    });

    this.list.connectTailWithHead();
  }

  calculateDimension() {
    if (!this.sceneRef) return;

    const { width, height } = this.sceneRef.getBoundingClientRect();

    this.cellsCount = Children.count(this.props.children) || 0;
    this.theta = 360 / this.cellsCount;
    this.radius = Math.round(width / 2 / Math.tan(Math.PI / this.cellsCount));
  }

  changeCarousel() {
    if (!this.list.length) return;

    let currentNode = this.list.getNodeAtIndex(0);
    while (true) {
      const cellAngle = this.theta * currentNode.value.id;
      currentNode.value.element.style.transform =
        "rotateY" + "(" + cellAngle + "deg) translateZ(" + this.radius + "px)";

      if (currentNode.value.id === this.list.length - 1) break;

      currentNode = currentNode.next;
    }

    this.rotateCarousel();
  }

  moveRight = () => {
    this.setState(
      function (state, props) {
        return {
          currentIndex: state.currentIndex + 1,
        };
      },
      () => {
        this.rotateCarousel();
      }
    );
  };

  moveLeft = () => {
    this.setState(
      function (state, props) {
        return {
          currentIndex: state.currentIndex - 1,
        };
      },
      () => {
        this.rotateCarousel();
      }
    );
  };

  bindEvents() {
    if (this.props.useKeyboardArrows) {
      getDocument().addEventListener("keydown", this.navigateWithKeyboard);
    }
  }

  navigateWithKeyboard() {}

  destroyCarousel() {}

  rotateCarousel() {
    if (!this.carouselWrapperRef) return;

    const angle =
      (this.theta as any) * (this.state.currentIndex as number) * -1;
    this.carouselWrapperRef.style.transform =
      "translateZ(" + -this.radius + "px) " + "rotateY" + "(" + angle + "deg)";

    this.props.onRotate(this.getCurrentNode());
  }

  setSceneRef = (node: HTMLDivElement) => {
    this.sceneRef = node;
  };

  setCarouselWrapperRef = (node: HTMLDivElement) => {
    this.carouselWrapperRef = node;
  };

  setItemRef = (element: HTMLElement, index: number) => {
    const node = this.list.getNodeAtIndex(index);
    node.value.element = element;
  };

  getActualIndex() {
    return Math.sign(this.state.currentIndex) < 0
      ? this.list.length - Math.abs(this.state.currentIndex)
      : this.state.currentIndex % this.list.length;
  }

  getCurrentNode() {
    const idx = this.getActualIndex();

    return this.list.getNodeAtIndex(idx);
  }

  handleClickItem(node: Node, index: number) {}

  handleLeftControlClick = () => {
    this.moveLeft();
  };

  handleRightControlClick = () => {
    this.moveRight();
  };

  //RENDER

  renderItems() {
    if (!this.props.children || !this.sceneRef) return;

    const { width, height } = this.sceneRef.getBoundingClientRect();

    return [...this.list].map((node, index) => {
      const slideProps = {
        ref: (element: HTMLDivElement) => this.setItemRef(element, index),
        onClick: this.handleClickItem.bind(this, node, index),
        className: "x-carousel__slide",
        style: { width: width + "px", height: height + "px" },
      };

      return <div {...slideProps}>{node.value.item}</div>;
    });
  }

  render() {
    return (
      <div className="x-scene" ref={this.setSceneRef}>
        <div className="x-carousel" ref={this.setCarouselWrapperRef}>
          {this.renderItems()}
        </div>
        <div
          className="x-scene-lcontrol"
          onClick={this.handleLeftControlClick}
        ></div>
        <div
          className="x-scene-rcontrol"
          onClick={this.handleRightControlClick}
        ></div>
      </div>
    );
  }
}
