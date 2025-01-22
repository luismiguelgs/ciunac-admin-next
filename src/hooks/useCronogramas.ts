import IcronogramaExam from "@/interfaces/cronogramaExam.interface";
import CronogramaExamService from "@/services/cronogramaExam.service";
import React from "react";

const useCronogramas = () => {
    const [data, setData] = React.useState<IcronogramaExam[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await CronogramaExamService.getAll();
            setData(res as IcronogramaExam[]);
            console.log(res);
            setLoading(false);
        };
        fetchData();
    }, []);

    return { data, loading, setData };
};

export default useCronogramas;