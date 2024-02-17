document.addEventListener('DOMContentLoaded', function () {
    const calendarHeader = document.getElementById('calendar-header');
    const calendarBody = document.getElementById('calendar');

    function buildCalendar() {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        // Setando o cabeçalho do calendário
        calendarHeader.innerHTML = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'long' }).format(today);

        // Criando os dias da semana
        const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        for (let day of daysOfWeek) {
            const cell = document.createElement('div');
            cell.textContent = day;
            calendarBody.appendChild(cell);
        }

        // Obtendo o primeiro dia do mês e o último dia do mês
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Preenchendo as células do calendário
        let dayCounter = 1;
        for (let i = 0; i < 42; i++) {
            const cell = document.createElement('div');
            if (i < firstDayOfMonth || dayCounter > lastDayOfMonth) {
                cell.classList.add('empty-cell');
            } else {
                cell.textContent = dayCounter;
                if (dayCounter === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                    cell.classList.add('current-day');
                }
                dayCounter++;
            }
            calendarBody.appendChild(cell);
        }
    }

    buildCalendar();
});
    

