import { ChangeEvent, useState } from "react"

interface values {
    [key: string]: string
}

export const useForm = ( initialState = {} ): [ values, any, any ] => {
    
    const [values, setValues] = useState(initialState);

    const reset = (): void => {
        setValues( initialState )
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const target = e.target

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}