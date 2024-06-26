import { Skeleton } from "@mui/material";

type GameListLoadingProps = {
    count?: number;
};

export default function GameListLoading({count = 8}: GameListLoadingProps) {
    const gameSkeleton = (
        <Skeleton 
            variant="rounded" 
            width="100%" height={100}  
            sx={{ 
                bgcolor: '#1e1e1e;',
                border: "2px solid #444",
                borderRadius: "10px",
            }}
        />
    )
    
    // Return 4 skeletons to represent 4 games
    return (
        <div style={{display: "flex", gap: 12, flexDirection: "column", margin: "16px 0"}}>
            {Array.from({length: count}).map((_, i) => (
                <div key={i} style={{display: "flex", gap: 12}}>
                    {gameSkeleton}
                </div>
            ))}
        </div>
    );
}