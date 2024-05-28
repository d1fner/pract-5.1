function createVisitCards() {
    var name = prompt('Введіть ім\'я', 'Назарій');
    var position = prompt('Введіть посаду', 'Студент');
    var phone = prompt('Введіть телефон', '+38000000000');

    var visitCardContent = `
        <div class="visit-card">
            <img src="./img/smile.jpg"" alt="Логотип">
            <p>${name}</p>
            <p>${position}</p>
            <p>${phone}</p>
        </div>
    `;

    var visitCardHTML = '';
    for (var i = 0; i < 12; i++) {
        visitCardHTML += '<tr>';
        for (var j = 0; j < 3; j++) {
            visitCardHTML += `<td>${visitCardContent}</td>`;
        }
        visitCardHTML += '</tr>';
    }

    document.getElementById('visit-card-table').innerHTML = visitCardHTML;
}

window.onload = createVisitCards;