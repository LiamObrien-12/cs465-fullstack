import { InjectionToken } from "@angular/core";

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});

export class Storage {
    getItem(key: string): string | null {
        return localStorage.getItem(key);
    }
    
    setItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
    
    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}


