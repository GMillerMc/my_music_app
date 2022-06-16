import { screen } from '@testing-library/react';

import { HypeButton } from '.';

describe('HypeButton', () => {
    beforeEach(() => {
        render(<HypeButton />)
    })

    test('renders a button with text Hype', () => {
        let hypeButton = screen.getByRole("switch")
        expect(hypeButton.textContent).toBe('Hype!')
    })

    test('changes colour of button when clicked', () => {
        let hypeButton = screen.getByRole("switch")
        let initColour = hypeButton.style.color
        userEvent.click(hypeButton)
        let clickedColour = hypeButton.style.color
        expect(clickedColour).not.toBe(initColour)
    })
})

