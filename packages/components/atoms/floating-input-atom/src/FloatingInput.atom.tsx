import React, { FC } from 'react';

export interface FloatingInputAtomProps {
	/* Props here */
	labelText: string;
	type: 'text' | 'password';
}

export const FloatingInputAtom: FC<FloatingInputAtomProps> = (
	props: FloatingInputAtomProps,
) => {
	return (
		<div className='relative'>
			<input
				id={props.labelText}
				name={props.labelText}
				type={props.type}
				placeholder='left empty on purpose for UI to work'
				className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 placeholder-transparent'
			/>
			<label
				htmlFor={props.labelText}
				className={`absolute transition-all left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:text-sm peer-focus:-top-3.5 peer-focus:text-gray-600`}>
				{props.labelText}
			</label>
		</div>
	);
};
