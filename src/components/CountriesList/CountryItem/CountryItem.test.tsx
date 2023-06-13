import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import TestWrapper from '../../TestWrapper/TestWrapper';
import CountryItem from './CountryItem';

describe('CountryItem component', () => {
  test('renders CountryItem', () => {
    render(
      <TestWrapper>
        <CountryItem
          name="Spain"
          capital={['Madrit']}
          population={4000000}
          coords={{ lat: 2, lng: 2 }}
          currency={['euro']}
          imgUrl=""
          activeCountry="Poland"
          onClick={(coords: { lat: number; lng: number }, name: string) => {}}
        />
      </TestWrapper>
    );

    const name = screen.getByText('Spain');
    const capital = screen.getByText('Madrit');
    const currency = screen.getByText('euro');
    const population = screen.getByText('4.00m');

    expect(name).toBeInTheDocument();
    expect(capital).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(population).toBeInTheDocument();
  });
});
