import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header } from './Header';
import { useHeaderState } from './Header.state';

import { ThemeProvider } from 'styles/theme';

jest.mock('./Header.state');

jest.mock('services/apiService/apiService', () => ({
  apiServices: {
    fetchCityGeoData: jest.fn(),
  },
}));

const mockOnGetCityHandlerMock = jest.fn();
const mockonClickItemHandler = jest.fn();
const baseConfig = {
  onOpenAutocompleteHandler: jest.fn(),
  onCloseAutocompleteHandler: jest.fn(),
  onGetCityHandler: mockOnGetCityHandlerMock,
  handleChange: jest.fn(),
  onClickItemHandler: mockonClickItemHandler,
  onRemoveErroHandler: jest.fn(),
  enqueueSnackbar: jest.fn(),
  onAutocompleteChangeHandler: jest.fn(),
  selectedCity: null,
  errorMessage: '',
  isError: false,
  pathname: '/',
  cities: [],
  debouncedSearchValue: '',
  searchValue: '',
  isAutocompleteOpen: true,
};

describe('Header', () => {
  const mockUseHeaderState = useHeaderState as jest.MockedFunction<
    typeof useHeaderState
  >;

  beforeEach(() => {
    mockUseHeaderState.mockReturnValue(baseConfig);
  });
  afterEach(() => {
    mockUseHeaderState.mockReset();
  });

  it('should render the header', () => {
    const view = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    expect(view).toMatchSnapshot();
    expect(screen.getByLabelText('Enter city name')).toBeInTheDocument();
  });

  it('calls onGetCityHandler when search value changes', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const searchInput = screen.getByLabelText(/Enter city name/i);
    fireEvent.change(searchInput, { target: { value: 'New York' } });
    expect(mockOnGetCityHandlerMock).toHaveBeenCalled();
  });
  it('renders the autocomplete options', async () => {
    const cities = [
      {
        name: 'New York',
        lat: 40,
        lon: 50,
        country: 'US',
        local_names: [],
      },
      {
        name: 'Los Angeles',
        lat: 34.0522,
        lon: -118.2437,
        country: 'US',
        local_names: [],
      },
    ];

    mockUseHeaderState.mockReturnValue({
      ...baseConfig,
      cities,
    });

    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const newYorkOption = await screen.findByText(/new york/i);
    expect(newYorkOption).toBeInTheDocument();
    userEvent.click(newYorkOption);
    expect(mockonClickItemHandler).toHaveBeenCalled();

    expect(await screen.findByText(/new york/i)).toBeInTheDocument();
    expect(await screen.findByText(/Los Angeles/i)).toBeInTheDocument();
  });
});
