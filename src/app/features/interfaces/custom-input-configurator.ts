export interface CustomInputConfigurator {
    FormControlName: string;
    label: string;
    placeholder?: string;
    type?: string;
    icon?: string;
    value?: any;
    disabled?: boolean;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    errorMessage?: string;
    input?: (event: Event) => void;
    customDirective? : boolean;
}
