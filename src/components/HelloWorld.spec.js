import HelloWorld from './HelloWorld.vue';
import {render, screen} from '@testing-library/vue';
import '@testing-library/jest-dom'

it('has a welcome header', () => {
    render(HelloWorld);
    const header = screen.queryByRole('heading', {name: 'Welcome to my CV'});
    expect(header).toBeInTheDocument();
});