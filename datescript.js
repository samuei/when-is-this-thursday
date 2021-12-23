const Calendar = tui.Calendar;

const calendar = new Calendar('#calendar', {
	defaultView: 'month',
	isReadOnly: true,
	template: {
		popupDetailDate: function(isAllDay, start, end) {
            const startD = start.toDate();
			const endD = end.toDate();
			const isSameDate = moment(startD).isSame(endD);
			
			return `${startD.toLocaleDateString()}${ isSameDate ? '' : ('-' + endD.toLocaleDateString())}`;
        }
	},
	useDetailPopup: true,
});

const schedules = [
	// Weeks (disabled for visual aesthetics)
	/*
	{
		category: "time",
		color: 'white',
		bgColor: 'navy',
		title: "Last Week",
		start: moment().day(-7).format('YYYY-MM-DD'),
		end: moment().day(-1).format('YYYY-MM-DD'),
		isAllDay: true
	},
	{
		category: "time",
		color: 'white',
		bgColor: 'blue',
		title: "This Week",
		start: moment().day(0).format('YYYY-MM-DD'),
		end: moment().day(6).format('YYYY-MM-DD'),
		isAllDay: true
	},
	{
		category: "time",
		color: 'white',
		bgColor: 'dodgerblue',
		title: "Next Week",
		start: moment().day(7).format('YYYY-MM-DD'),
		end: moment().day(13).format('YYYY-MM-DD'),
		isAllDay: true
	},
	*/
	
	// Thursdays (Relative to the week)
	{
		category: "time",
		color: 'white',
		bgColor: 'blue',
		title: "This Thursday",
		body: "Thursday of this week",
		start: moment().day(4).format('YYYY-MM-DD'),
		isAllDay: true
	},
	{
		category: 'time',
		color: 'white',
		bgColor: 'navy',
		title: 'Last Thursday',
		body: 'Thursday of last week',
		start: moment().day(-3).format('YYYY-MM-DD'),
		isAllDay: true
	},
	{
		category: 'time',
		color: 'white',
		bgColor: 'dodgerblue',
		title: 'Next Thursday',
		body: 'Thursday of next week',
		start: moment().day(11).format('YYYY-MM-DD'),
		isAllDay: true
	},
];

// More Thursdays
const today = moment().day();
if (today === 4) { // Today is Thursday
	schedules.push(
		{
			category: "time",
			color: 'white',
			bgColor: 'blue',
			title: "This Thursday",
			body: "Next Thursday in the future",
			start: moment().day(11).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: 'time',
			color: 'white',
			bgColor: 'navy',
			title: 'Last Thursday',
			body: 'The last Thursday in the past',
			start: moment().day(-3).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: 'time',
			color: 'white',
			bgColor: 'navy',
			title: 'Last Thursday',
			body: 'The Thursday before this Thursday (next Thursday in the future)',
			start: moment().day(4).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: "time",
			color: 'white',
			bgColor: 'dodgerblue',
			title: "Next Thursday",
			body: "Next Thursday in the future",
			start: moment().day(11).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: 'time',
			color: 'white',
			bgColor: 'dodgerblue',
			title: 'Next Thursday',
			body: 'The Thursday after this Thursday (next Thursday in the future)',
			start: moment().day(18).format('YYYY-MM-DD'),
			isAllDay: true
		}
	);
} else if (today < 4) {
	schedules.push(
		{
			category: "time",
			color: 'white',
			bgColor: 'blue',
			title: "This Thursday",
			body: "Next Thursday in the future",
			start: moment().day(4).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: 'time',
			color: 'white',
			bgColor: 'navy',
			title: 'Last Thursday',
			body: 'The last Thursday in the past',
			start: moment().day(-3).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: 'time',
			color: 'white',
			bgColor: 'navy',
			title: 'Last Thursday',
			body: 'The Thursday before this Thursday (next Thursday in the future)',
			start: moment().day(-3).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: "time",
			color: 'white',
			bgColor: 'dodgerblue',
			title: "Next Thursday",
			body: "Next Thursday in the future",
			start: moment().day(4).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: 'time',
			color: 'white',
			bgColor: 'dodgerblue',
			title: 'Next Thursday',
			body: 'The Thursday after this Thursday (next Thursday in the future)',
			start: moment().day(11).format('YYYY-MM-DD'),
			isAllDay: true
		}
	);
} else { // It is Friday or Saturday
	schedules.push(
		{
			category: "time",
			color: 'white',
			bgColor: 'blue',
			title: "This Thursday",
			body: "Next Thursday in the future",
			start: moment().day(11).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: 'time',
			color: 'white',
			bgColor: 'navy',
			title: 'Last Thursday',
			body: 'The last Thursday in the past',
			start: moment().day(4).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: 'time',
			color: 'white',
			bgColor: 'navy',
			title: 'Last Thursday',
			body: 'The Thursday before this Thursday (next Thursday in the future)',
			start: moment().day(4).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: "time",
			color: 'white',
			bgColor: 'dodgerblue',
			title: "Next Thursday",
			body: "Next Thursday in the future",
			start: moment().day(11).format('YYYY-MM-DD'),
			isAllDay: true
		},
		{
			category: 'time',
			color: 'white',
			bgColor: 'dodgerblue',
			title: 'Next Thursday',
			body: 'The Thursday after this Thursday (next Thursday in the future)',
			start: moment().day(18).format('YYYY-MM-DD'),
			isAllDay: true
		}
	);
}

calendar.createSchedules(schedules);
