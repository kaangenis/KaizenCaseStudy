import dayjs from "dayjs";

export const useDateTimeHook = () => {
    const calculateRemainingText = (remainingText: string) => {
        const replacedText = remainingText.replaceAll('.', '-');
        const splittedText = replacedText.split('-');
        const partsOfText = splittedText[2] + '-' + splittedText[1] + '-' + splittedText[0];
        const unixTimestamp = dayjs(partsOfText, 'YYYY-MM-DD').unix();
        const currentTime = dayjs().unix();
        const remainingTime = unixTimestamp - currentTime;
        const remainingDay = Math.floor(remainingTime / 86400);
        return remainingDay + ' Gün Kaldı';
    };

    return {
        calculateRemainingText
    };
};