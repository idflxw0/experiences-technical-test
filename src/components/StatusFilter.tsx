import { memo } from 'react';
import { CharacterStatus } from '../enums';
import type { CharacterStatusType } from '../enums';

interface StatusFilterProps {
    selectedStatus: CharacterStatusType | 'all';
    onStatusChange: (status: CharacterStatusType | 'all') => void;
}

export const StatusFilter = memo(function StatusFilter({ selectedStatus, onStatusChange }: StatusFilterProps) {
    return (
        <div className="status-filter">
            <label htmlFor="status-select">Filter by status:</label>
            <select
                id="status-select"
                value={selectedStatus}
                onChange={(e) => onStatusChange(e.target.value as CharacterStatusType | 'all')}
            >
                <option value="all">All</option>
                <option value={CharacterStatus.ALIVE}>Alive</option>
                <option value={CharacterStatus.DEAD}>Dead</option>
                <option value={CharacterStatus.UNKNOWN}>Unknown</option>
            </select>
        </div>
    );
});
