import { ExamenesService } from "@/services/examenes.service"
import { Box } from "@mui/material"
import Participants from "./Participants"

async function getParticipants() {
    return await ExamenesService.fetchExamenesNotas()
}
async function getExams() {
    return await ExamenesService.fetchItems()
}


export default async function ParticipantPage() 
{
    const participants = await getParticipants()
    const exams = await getExams()

    return (
        <Box>
            <Participants data={participants} exams={exams}/>
        </Box>
    )
}
