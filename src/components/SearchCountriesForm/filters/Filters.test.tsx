import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import TestWrapper from '../../TestWrapper/TestWrapper';
import Filters from './Filters';

describe('Filters component', () => {
  test('renders Filters', () => {
    render(
      <TestWrapper>
        <Filters onFilterChange={() => {}} />
      </TestWrapper>
    );

    const countryFilter = screen.getByText('Country');
    const capitalFilter = screen.getByText('Capital');

    expect(countryFilter).toBeInTheDocument();
    expect(countryFilter).toHaveClass('button--active', { exact: false });
    expect(capitalFilter).toBeInTheDocument();
    expect(capitalFilter).not.toHaveClass('button--active', { exact: false });
  });
  test('change active filter onclick', () => {
    render(
      <TestWrapper>
        <Filters onFilterChange={() => {}} />
      </TestWrapper>
    );

    const countryFilter = screen.getByText('Country');
    const capitalFilter = screen.getByText('Capital');

    expect(countryFilter).toBeInTheDocument();
    expect(countryFilter).toHaveClass('button--active', { exact: false });
    expect(capitalFilter).toBeInTheDocument();
    expect(capitalFilter).not.toHaveClass('button--active', { exact: false });

    fireEvent.click(capitalFilter);

    expect(countryFilter).toBeInTheDocument();
    expect(countryFilter).not.toHaveClass('button--active', { exact: false });
    expect(capitalFilter).toBeInTheDocument();
    expect(capitalFilter).toHaveClass('button--active', { exact: false });
  });
});
