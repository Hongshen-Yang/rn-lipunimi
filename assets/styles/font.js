import { Platform } from 'react-native';

export const Font = {
    Main: Platform.OS === 'ios' ? 'Hoefler Text' : 'monospace',
    Secondary: Platform.OS === 'ios' ? 'Hoefler Text' : 'monospace',
}