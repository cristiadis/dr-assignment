import formatDuration from './formatDuration';

describe('Correctly formats the duration', () => {
  test('It returns correctly formatted duration, without hours', () => {
    const milliseconds = 1677984;
    const formattedDuration = formatDuration(milliseconds);

    expect(formattedDuration).toEqual('27:57');
  });

  test('It returns correctly formatted duration, with hours', () => {
    const milliseconds = 10560000;
    const formattedDuration = formatDuration(milliseconds);

    expect(formattedDuration).toEqual('02:56:00');
  });
});

describe('It returns empty when the parameter has an incorrect format', () => {
  test('When the parameter is a string', () => {
    const milliseconds = 'hello';
    // @ts-ignore Ignored for the purpose of this test
    const formattedDuration = formatDuration(milliseconds);

    expect(formattedDuration).toEqual(undefined);
  });

  test('When no parameter is passed', () => {
    // @ts-ignore Ignored for the purpose of this test
    const formattedDuration = formatDuration();

    expect(formattedDuration).toEqual(undefined);
  });
});