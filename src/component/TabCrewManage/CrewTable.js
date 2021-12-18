import Component from '../../core/Component.js';
import crew from '../../store/Crew.js';
import { ID, CLASS } from '../../constant/selector.js';
import { COURSE, FRONTEND, BACKEND } from '../../constant/data.js';

export default class CrewTable extends Component {
  init() {
    crew.add(this);
  }

  template() {
    const selectedCourse = crew.getSelectedCourse();

    return `
      <h3>${selectedCourse === COURSE.FRONTEND ? FRONTEND : BACKEND} 크루 목록</he>
      <table id="${ID.CREW_TABLE}" border="1">
        <thead>
          ${this.templateTableHeader()}
        </thead>
        <tbody>
          ${this.templateTableBody()}
        </tbody>
      </table>
    `;
  }

  templateTableHeader() {
    return `
      <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
      </tr>
    `;
  }

  templateTableBody() {
    const crewList = crew.getSelectedCourseCrews();

    return `
      ${crewList.map((crew, index) => `
        <tr>
          <td>${index+1}</td>
          <td>${crew}</td>
          <td>
            <button class="${CLASS.DELETE_CREW_BUTTON}" data-name="${crew}" data-order="${index}">삭제</button>
          </td>
        </tr>
      `).join('')}  
    `;
  }
}
