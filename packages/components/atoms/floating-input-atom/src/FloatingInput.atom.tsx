import React, { FC } from 'react';

export interface FloatingInputAtomProps {
	/* Props here */
	labelText: string;
	placeHolder: string;
	type: 'text' | 'password';
}

export const FloatingInputAtom: FC<FloatingInputAtomProps> = (
	props: FloatingInputAtomProps,
) => {
	return (
		<div className=''>
			<input
				id={props.labelText}
				name={props.labelText}
				type={props.type}
				placeholder={props.placeHolder}
				className='peer h-10 w-full border-b-2 border-gray-300 text-purple-900 focus:outline-none focus:border-rose-600'
			/>
			<label className='peer-placeholder-shown:uppercase'>
				{props.labelText}
			</label>
		</div>
	);
};
