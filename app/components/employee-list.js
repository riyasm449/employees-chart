import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { computed, action } from '@ember/object';
export default class EmployeeListComponent extends Component {
  @tracked isTableLoading = false;
  @tracked searchQuery = '';
  @tracked selectedTeam = "All";
  classNames = ["employee-list-component"];
  get columns() {
    return [
      { name: 'Name', valuePath: 'name' },
      { name: 'Designation', valuePath: 'role' },
      { name: 'Team', valuePath: 'team' },
      { name: 'Manager', valuePath: 'manager_name' }
    ];
  }

  sorts = [
    {
      valuePath: 'name',
      isAscending: false,
    },
    {
      valuePath: 'role',
      isAscending: true,
    },
    {
      valuePath: 'team',
      isAscending: true,
    },
    {
      valuePath: 'manager_name',
      isAscending: true,
    }
  ];

  get tableOptions() {
    return {
      enableSync: true,
    };
  }

  get teamFilterOptions(){
    const { employees } = this.args;
    const uniqueTeams = Array.from(new Set(employees.map(item => item.team)));
    return ["All", ...uniqueTeams];
  }

  @computed("args.employees.@each", "searchQuery", "selectedTeam")
  get employees() {
    let employeesList = [];
    let empIdNamePair = {};
    this.args.employees.forEach(element => {
      empIdNamePair[element.id] = element.name;
    });

    this.args.employees.forEach(element => {
      employeesList.push({
        name: element.name,
        manager_id: element.manager_id,
        team: element.team,
        manager_name: empIdNamePair[element.manager_id] ?? "--",
        role: element.role
      });
    });
    employeesList = employeesList.filter(item => 
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      ( this.selectedTeam == "All" || item.team == this.selectedTeam )
    );
    return employeesList;
  }

  @action
  updateSearchQuery(event) {
    this.searchQuery = event.target.value;
  }

  @action
  updateSelectedTeam(team) {
    this.selectedTeam = team;
  }
}
