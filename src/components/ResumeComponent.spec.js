import ResumeComponent from './ResumeComponent.vue';
import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom'

it('renders successfully', () => {
    render(ResumeComponent);
});