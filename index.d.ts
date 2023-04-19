export interface Country {
    name: string;
    dial_code: string;
    code: string;
  }
  
  export const countryCodes: Country[];
  
  export function findByCode(code: string): Country | undefined;
  
  export function findByName(name: string): Country | undefined;
  
  export function findByDialCode(dialCode: string): Country | undefined;
  