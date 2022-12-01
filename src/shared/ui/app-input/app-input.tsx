import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import React, { InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppInputProps extends HTMLInputProps{
    classNames?: string,
    value?: string,
    type: 'text' | 'password',
    placeholder?: string,
    onChange?:(value: string) => void,
}

function AppInput(props: AppInputProps): JSX.Element {
    const {
        classNames, value, type, placeholder, onChange, ...restProps
    } = props;

    const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.currentTarget.value);
    };

    return (
        <input
            className={buildNames([classNames])}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleOnChange}
            {...restProps}
        />
    );
}

export default React.memo(AppInput);
