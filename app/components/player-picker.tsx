"use client"

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { on } from "events";
import { useEffect, useState } from "react";
import { getPlayers } from "../data";

type PlayerPickerProps = {
    value: string;
    onChange: (player: string) => void;
};

export default function PlayerPicker({value, onChange}: PlayerPickerProps) {
    const [players, setPlayers] = useState(["Alice", "Bob", "Charlie", "David"]);

    useEffect(() => {
        getPlayers().then(setPlayers);
    }, []);

    const handleChange = (event: { target: { value: any; }; }) => {
        const player = event.target.value;
        onChange(player);
    }

    return (
        <FormControl sx={{minWidth: "100%", padding: "0 8px", margin: "16px 0"}}>
            {
                !value && (
                    <InputLabel>
                        Pick a player
                    </InputLabel>
                )
            }
            <Select
                onChange={handleChange}
                value={value}
                autoWidth

            >
                { players.map(p => (
                    <MenuItem 
                        key={p} 
                        value={p}
                        sx={{minWidth: "100%"}}
                    >
                        {p}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}