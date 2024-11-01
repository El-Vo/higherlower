import React, {useEffect, useState} from 'react';

const readCsvFile = (file: File): Promise<string[][]> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const csvText = event.target?.result as string;
            const rows = csvText.split('\n')
                .filter(row => row.trim() !== '')  // Remove empty rows
                .map(row => row.split(',').map(cell => cell.trim()));  // Trim each cell
            resolve(rows);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsText(file);
    });
};

interface ImageCardProps {
    imageSrc?: string;
    caption?: string;
    answer?: string;
    altText?: string;
    className?: string;
    onClick?: () => void;
}

const ImageCards: React.FC<ImageCardProps> = () => {
    const [csvData, setCsvData] = useState<string[][]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSearchTermLeft, setCurrentSearchTermLeft] = useState<string[]>([]);
    const [currentSearchTermRight, setCurrentSearchTermRight] = useState<string[]>([]);

    useEffect(() => {
        loadGameData();
    }, []);

    async function loadGameData() {
        try {
            const response = await fetch("/testData.csv");
            const data = await response.blob();
            const metadata = {
                type: 'text/csv'
            };
            const loadedData = await readCsvFile(new File([data], 'testData', metadata));
            setCsvData(loadedData);

            // Initialize the first two entries
            if (loadedData.length >= 2) {
                setCurrentSearchTermLeft(loadedData[0]);
                setCurrentSearchTermRight(loadedData[1]);
                setCurrentIndex(2);
            }
        } catch (error) {
            console.error("Error loading CSV data:", error);
        }
    }

    function getNextSearchTerms() {
        if (currentIndex >= csvData.length) {
            // Reset to the beginning if we've reached the end
            setCurrentIndex(0);
            setCurrentSearchTermLeft(csvData[0]);
            setCurrentSearchTermRight(csvData[1]);
            return;
        }

        // Set the next two entries
        setCurrentSearchTermLeft(csvData[currentIndex]);

        if (currentIndex + 1 < csvData.length) {
            setCurrentSearchTermRight(csvData[currentIndex + 1]);
            setCurrentIndex(currentIndex + 2);
        } else {
            // If there's only one entry left, set the right side to empty
            setCurrentSearchTermRight([]);
            setCurrentIndex(0);
        }
    }

    return (
        <div className="column text-style d-flex align-items-center justify-content-center">
            <div style={{width: '18rem'}}>
                <div className="card-body">
                    <button
                        onClick={getNextSearchTerms}
                        className="btn btn-primary mt-2 w-100"
                    >
                        {currentSearchTermLeft[0]}
                    </button>
                </div>
                <div className="card-body">
                    <p className="card-text text-center">
                        {currentSearchTermLeft[1]}
                    </p>
                </div>
            </div>
            <div style={{width: '18rem'}}>
                <div className="card-body">
                    <button
                        onClick={getNextSearchTerms}
                        className="btn btn-primary mt-2 w-100"
                    >
                        {currentSearchTermRight[0]}
                    </button>
                </div>
                <div className="card-body">
                    <p className="card-text text-center">
                        {currentSearchTermRight[1]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImageCards;