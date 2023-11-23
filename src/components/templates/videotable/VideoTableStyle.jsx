import { TableCell, TableHead, TableRow, Typography } from "@mui/material"
import {styled} from "@mui/system"

export const VideoWrapper = styled("div")({
    padding: "40px"
})

export const PageTitle = styled(Typography)({
    fontWeight: "600",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2rem"
})

export const TableHeader = styled(TableHead)({
    background: "#e5e5e5"
})

export const TableCellName = styled(TableCell)({
    fontWeight: "600"
})