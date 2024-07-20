jest.mock('expo-font', () => {
  return {
    useFonts: jest.fn().mockImplementation(() => [true, null]),
  }
});

import { act, fireEvent, renderRouter, screen } from 'expo-router/testing-library';
import { useFonts } from 'expo-font';


jest.mock('expo-splash-screen', () => ({
  hideAsync: jest.fn(),
  preventAutoHideAsync: jest.fn(),
}));

describe('_layout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Hello from Tab Two', async () => {

    (useFonts as jest.Mock).mockReturnValue([true, null]);
    renderRouter('./app', {
      initialUrl: '/two',
    });
    const welcomeMessage = await screen.findAllByText('Hello from Tab Two');
    expect(welcomeMessage).toBeTruthy();
  }, 60000 /** set to 60s because ci timing out. */);
  it('should default to Apple selected', async () => {
    throw new Error("How do you write this test?");
  }, 60000 /** set to 60s because ci timing out. */);
  it('should allow you to select Pear', async () => {
    throw new Error("How do you write this test?");
  }, 60000 /** set to 60s because ci timing out. */);
});