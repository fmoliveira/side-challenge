import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PropertyListings from './PropertyListings';

import propertiesFixture from '../test/properties.fixture.json';

describe('PropertyListings', () => {
  // a better alternative to mocking fetch would be using `msw` instead
  beforeAll(() => jest.spyOn(window, 'fetch'));

  beforeEach(() => {
    // remove cached data during testing
    localStorage.clear();
  });

  it('renders component', () => {
    render(<PropertyListings />);
    const heading = screen.getByRole('heading', { name: 'Property Listings' });
    expect(heading).toBeInTheDocument();
  });

  it.skip('displays loading state', () => {
    //
  });

  it.skip('displays error state', () => {
    // TODO
  });

  it('list properties', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => propertiesFixture,
    });

    render(<PropertyListings />);

    // wait for request to finish
    const properties = await screen.findAllByText(/Listed/);

    expect(properties.length).toBeGreaterThan(10);
  });

  it('displays property data', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [propertiesFixture[0]],
    });

    render(<PropertyListings />);

    // wait for request to finish
    await screen.findByText(/Listed/);

    expect(screen.getByText('2 BR')).toBeInTheDocument();
    expect(screen.getByText('8 Bath')).toBeInTheDocument();
    expect(screen.getByText('1043 Sq Ft')).toBeInTheDocument();
    expect(screen.getByText('$20,714,261')).toBeInTheDocument();
    expect(
      screen.getByText('74434 East Sweet Bottom Br, Houston, TX'),
    ).toBeInTheDocument();
    expect(screen.getByText('Listed: 5/23/2011')).toBeInTheDocument();
  });

  it('toggles favorite state', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [propertiesFixture[0]],
    });

    render(<PropertyListings />);

    // wait for request to finish
    await screen.findByText(/Listed/);

    const getButton = (name) => screen.getByRole('button', { name });
    const queryButton = (name) => screen.queryByRole('button', { name });

    // checks for original state
    expect(getButton('Add favorite')).toBeInTheDocument();
    expect(queryButton('Remove favorite')).not.toBeInTheDocument();

    userEvent.click(getButton('Add favorite'));

    // switches to favorited state
    expect(getButton('Remove favorite')).toBeInTheDocument();
    expect(queryButton('Add favorite')).not.toBeInTheDocument();

    userEvent.click(getButton('Remove favorite'));

    // reverts to original state
    expect(getButton('Add favorite')).toBeInTheDocument();
    expect(queryButton('Remove favorite')).not.toBeInTheDocument();
  });
});
