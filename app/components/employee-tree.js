import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class EmployeeTreeComponent extends Component {
  get sortedEmployees() {
    return this.args.employees
  }

  get currentEmployee() {
    console.log(this.args.employees)
    return this.args.employees
  }
  @action
  handleDragStart(node) {
    if(this.args?.callbacks?.dragElementHandler){
        this.args.callbacks.dragElementHandler(node.employee)
    }
  }

  @action
  handleDragOver(event) {
    event.preventDefault();
  }

  @action
  handleDrop(node) {
    if(this.args?.callbacks?.dropElementHandler){
        this.args.callbacks.dropElementHandler(node.employee)
    }
  }
}
