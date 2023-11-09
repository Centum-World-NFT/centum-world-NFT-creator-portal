import { Card, Typography } from "@mui/material"
import {styled} from "@mui/system"

export const OverViewWrapper = styled("div")({
    border: "1px solid blue",
    padding: "50px"
})

export const OverviewContainer = styled("div")({
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
})

export const MainCard = styled(Card)({
    width: "max-content",
    padding: "20px 10px 20px 10px",
    display: "flex",
    height: "100px",
    width: "20%"
})

export const CardHeader = styled(Typography)({
    textTransform: "uppercase",
    fontSize: ".9rem",
    opacity: "0.5",
    fontWeight: "600"
})

export const ViewsCount = styled(Typography)({
    fontSize: "2rem",
    fontWeight: "900"
})

export const CardSubtitle = styled(Typography)({
    fontSize: ".7rem",
    opacity: ".5",
    fontWeight: "600"
})

export const CardWrapper = styled("div")({
    display: "Flex",
    width: "100%",
    justifyContent: "space-between"
})