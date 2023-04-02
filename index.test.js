const sum =  require('./index')

test('properly added two numbers', () => {
    expect(sum(1,2)).toBe(3)
})