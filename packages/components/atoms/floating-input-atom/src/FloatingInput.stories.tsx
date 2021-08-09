import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	FloatingInputAtom,
	FloatingInputAtomProps,
} from './FloatingInput.atom';

export default {
	title: 'Atom/FloatingInput',
	component: FloatingInputAtom,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<FloatingInputAtomProps> = args => (
	<FloatingInputAtom {...args} />
);

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
