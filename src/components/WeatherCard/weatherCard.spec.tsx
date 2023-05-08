import { render, screen, fireEvent } from '@testing-library/react';

import { WeatherCard } from './WeatherCard';
import { useWeatherCardState } from './WeatherCard.state';
import { ThemeProvider } from '../../styles/theme';

jest.mock('./WeatherCard.state', () => ({
  useWeatherCardState: jest.fn(),
}));

const mockProps = {
  cityName: 'Kharkiv',
  currentTemperature: 20,
  country: 'UA',
  timeStamp: 1620399000,
  icon: '01d',
  maxTemperature: 22,
  minTemperature: 18,
  weatherDescription: 'clear sky',
  cardId: 1,
  lat: 48.856614,
  lon: 2.3522219,
};
const mockOnRefresh = jest.fn();
const mockOnDelete = jest.fn();
const mockOnCardClick = jest.fn();

const mockState = {
  onDeleteWeatherCardHandler: mockOnDelete,
  onRefreshWeatherCardDataHandler: mockOnRefresh,
  onCardClickHandler: mockOnCardClick,
  isLoading: false,
};
describe('WeatherCard', () => {
  beforeEach(() => {
    const mockUseWeatherCardState = jest.fn().mockReturnValue(mockState);

    (useWeatherCardState as jest.Mock).mockImplementation(
      mockUseWeatherCardState
    );
  });

  it('should render the weather card component', () => {
   const view = render(
      <ThemeProvider>
        <WeatherCard {...mockProps} />;
      </ThemeProvider>
    );
    expect(view).toMatchSnapshot()
    expect(screen.getByTestId('weather-card')).toBeInTheDocument();
  });

  it('should render WeatherCard with props', () => {
    render(
      <ThemeProvider>
        <WeatherCard {...mockProps} />;
      </ThemeProvider>
    );

    expect(
      screen.getByText(`${mockProps.cityName}, ${mockProps.country}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProps.weatherDescription}`)
    ).toBeInTheDocument();
  });

  it('refresh button handler should works', () => {
    render(
      <ThemeProvider>
        <WeatherCard {...mockProps} />;
      </ThemeProvider>
    );

    const button = screen.getByTestId('refresh-button');

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockOnRefresh).toHaveBeenCalledTimes(1);
  });

  it('click on card handler should works', () => {
    render(
      <ThemeProvider>
        <WeatherCard {...mockProps} />;
      </ThemeProvider>
    );

    const card = screen.getByTestId('weather-card');

    expect(card).toBeInTheDocument();
    fireEvent.click(card);
    expect(mockOnCardClick).toHaveBeenCalledTimes(1);
  });

  it('remove button handler should works', () => {
    render(
      <ThemeProvider>
        <WeatherCard {...mockProps} />;
      </ThemeProvider>
    );

    const button = screen.getByTestId('remove-button');

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });
});
