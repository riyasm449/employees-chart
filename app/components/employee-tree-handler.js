import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
export default class EmployeeTreeHandlerComponent extends Component {
    @tracked draggedEmployee;

    @computed("args.employees.@each")
    get sortedEmployee() {
        const employees = this.args.employees;
        const employeeMap = new Map();
        const tree = [];

        employees.forEach((employee) => {
            const node = { employee, children: [] };
            employeeMap.set(employee.id, node);

            const managerId = employee.manager_id;

            if (managerId) {
                const managerNode = employeeMap.get(managerId);
                if (managerNode) {
                    managerNode.children.push(node);
                }else{
                    tree.push(node);
                }
            } else {
                tree.push(node);
            }
        });
        return tree;
    }

    @action dragElementHandler(employee) {
        this.draggedEmployee = employee;
    }

    @action dropElementHandler(employee) {
        this.args.callbacks.changeManagerAction(employee.id, this.draggedEmployee.id);
    }
}
