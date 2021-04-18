import { Platform } from 'react-native';

export const Font = {
    Main: Platform.OS === 'android' ? 'monospace' : 'Hoefler Text',
    Secondary: Platform.OS === 'android' ? 'monospace' : 'Hoefler Text',
}