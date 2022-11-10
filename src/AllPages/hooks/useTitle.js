import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} -Cheffythings_`;
    }, [title])
};

export default useTitle;