import { initialState, counterReducer, Action, ActionType, FormState } from '../FormReducer'; // Import your reducer and types
import { expect, test, describe } from "bun:test";


describe('FormReducer', () => {
    test('should increment the step', () => {
        const action: Action = { type: ActionType.incrementStep };
        const newState = counterReducer(initialState, action);
        expect(newState.step).toBe(initialState.step + 1);
    });

    test('should decrement the step', () => {
        const action: Action = { type: ActionType.decrementStep };
        const newState = counterReducer(initialState, action);
        expect(newState.step).toBe(initialState.step - 1);
    });

    test('should update the fullName', () => {
        const action: Action = { type: ActionType.updateFullName, payload: 'John Doe' };
        const newState = counterReducer(initialState, action);
        expect(newState.formPayload.fullName).toBe('John Doe');
    });

    test('should update the cpf', () => {
        const action: Action = { type: ActionType.updateCpf, payload: '123456789' };
        const newState = counterReducer(initialState, action);
        expect(newState.formPayload.cpf).toBe('123456789');
    });

    test('should update the rg', () => {
        const action: Action = { type: ActionType.updateRg, payload: 'ABC123' };
        const newState = counterReducer(initialState, action);
        expect(newState.formPayload.rg).toBe('ABC123');
    });

    test('should update the genderIdentity', () => {
        const action: Action = { type: ActionType.updateGenderIdentity, payload: 'Male' };
        const newState = counterReducer(initialState, action);
        expect(newState.formPayload.genderIdentity).toBe('Male');
    });

    test('should update the nationality', () => {
        const action: Action = { type: ActionType.updateNationality, payload: 'USA' };
        const newState = counterReducer(initialState, action);
        expect(newState.formPayload.nationality).toBe('USA');
    });
})