import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action, set } from '@ember/object';
export default class ApplicationRoute extends Route {
  @service firebase;

  async model() {
    const employees = await this.firebase.getEmployees();
    return employees ? Object.values(employees) : null;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.currentRoute = this;
    controller.model = model;
  }
  
  @action changeManagerAction(managerId, employeeId) {
    if (managerId != employeeId) {
      let employee = this.controller.model.find(emp => emp.id === employeeId);
      if (employee.manager_id) {
        employee.manager_id = managerId;
        this.controller.model = [...this.controller.model];
      }
    }
  }
}
