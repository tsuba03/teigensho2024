function createProposalTitle(tag1, tag2, tag3, tag4) {
    return `
      <table class="proposal-table">
        <tr style="height:42.45pt">
          <td class="proposal-num-cell">
            <p class="proposal-p">
                ${tag1}
              </a>
            </p>
          </td>
          <td class="proposal-category-cell">
            <p class="proposal-p">
              ${tag2}
            </p>
          </td>
          <td class="proposal-label-cell">
            <p class="proposal-p">
              ${tag3}
            </p>
          </td>
          <td class="proposal-title-cell">
            <p class="proposal-p">
              ${tag4}
            </p>
          </td>
        </tr>
      </table>
    `;
  }

function createHeadline(tag1) {
    return `
    <table class="a33">
    <tr>
      <td class="cell-1">
        <p class="a35"><span class="cell-content">&#xa0;</span></p>
      </td>
      <td class="cell-2">
        <p class="a35"><span class="cell-content bold-text">${tag1}</span></p>
      </td>
    </tr>
  </table>
  `;
}