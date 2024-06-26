import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { getPlayers } from "../data";

type PlayerPickerProps = {
    value: string;
    onChange: (player: string) => void;
};

export default function PlayerPicker({ value, onChange }: PlayerPickerProps) {
    const players = getPlayers();

    const handleChange = (event: { target: { value: any; }; }) => {
        onChange(event.target.value);
    }

    return (
        <FormControl fullWidth>
            {
                !value && (
                    <InputLabel
                        shrink={false}
                        sx={{
                            color: "white",
                        }}>
                        Pick a player
                    </InputLabel>
                )
            }
            <Select
                onChange={handleChange}
                value={value}
                fullWidth
                sx={{
                    color: "white",
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '.MuiSvgIcon-root ': {
                        fill: "white !important",
                    }
                }}
            >
                {players.map(p => (
                    <MenuItem
                        key={p}
                        value={p}
                        sx={{ minWidth: "100%" }}
                    >
                        {p}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}