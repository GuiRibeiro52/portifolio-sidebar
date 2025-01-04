import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next';
import Home from './Home';
import i18n from '../../i18n';

jest.mock('../assets/images/Img.png', () => 'mocked-image-path');

describe('Home Component', () => {
  test('renders the title and subtitle correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    );

    expect(screen.getByText(/GUILHERME RIBEIRO/i)).toBeInTheDocument(); 
    expect(screen.getByText(i18n.t('home.subtitle'))).toBeInTheDocument(); // Usa a tradução do i18n
  });

  test('renders the image correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    );

    const imageElement = screen.getByRole('img', { name: /Guilherme/i });
    expect(imageElement).toHaveAttribute('src', 'mocked-image-path');
  });
});

test('displays the correct translation for title and subtitle', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Home />
    </I18nextProvider>
  );

  // Verifica o título.
  expect(screen.getByText(/GUILHERME/i)).toBeInTheDocument();

  // Verifica o subtítulo usando o i18n para buscar a tradução correta.
  const subtitle = i18n.t('home.subtitle');
  expect(
    screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === subtitle; // Usa a tradução do i18n
      const nodeHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    })
  ).toBeInTheDocument();

  // Muda o idioma e verifica novamente.
  i18n.changeLanguage('en');
  expect(screen.getByText(/GUILHERME/i)).toBeInTheDocument(); // Nome permanece visível.
  const subtitleInEnglish = i18n.t('home.subtitle', { lng: 'en' });
  expect(
    screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === subtitleInEnglish; // Tradução do texto.
      const nodeHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    })
  ).toBeInTheDocument();
});
