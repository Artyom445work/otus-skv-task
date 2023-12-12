import {getDayOfweek, getMinutesFromDayBeginning, getYoungerUser} from './index.js'
test('getDayOfweek test on date 10.12.2023 must return ВС', () => {
	expect(getDayOfweek('10.12.2023')).toBe('ВС')
})

test('getMinutesFromDayBeginning test on date must return current count of minutes', () => {
	const mockDate = new Date(2020, 3, 1, 5, 30)
	jest.spyOn(global, 'Date').mockImplementation(() => mockDate)

	expect(getMinutesFromDayBeginning()).toBe(330)
})

test('getYoungerUser on dates 10.12.2022 and 10.12.2023 must return 10.12.2023', () => {
	expect(getYoungerUser('10.12.2022', '10.12.2023')).toBe('10.12.2023')
})