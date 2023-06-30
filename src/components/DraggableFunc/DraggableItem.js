import React from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

class DraggableItem extends React.Component {
  componentDidMount() {
    $(this.item).draggable({
      start: (event, ui) => {
        this.item.style.zIndex = 100;
      },
      stop: (event, ui) => {
        let newPosition = [];
        const items = document.querySelectorAll('.item');
        items.forEach((item) => {
          let positionData = item.offsetLeft;
          let nowPosition = { name: item.id, position: positionData };
          newPosition.push(nowPosition);
        });
        newPosition.sort((a, b) => {
          if (a['position'] > b['position']) return -1;
          if (a['position'] < b['position']) return 1;
          return 0;
        });
        let number = 0;
        for (let i = newPosition.length; i--;) {
          let tmpItem = document.getElementById(newPosition[i].name);
          tmpItem.style.order = number;
          tmpItem.style.left = 0;
          tmpItem.style.top = 0;
          number++;
        }
        this.item.style.zIndex = 0;
      },
    });
  }

  render() {
    return (
      <div
        id={this.props.id} //pass div id to render
        className={`item ${this.props.className}`}
        ref={(item) => (this.item = item)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DraggableItem;