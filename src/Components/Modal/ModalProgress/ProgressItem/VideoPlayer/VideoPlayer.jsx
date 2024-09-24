import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Loader from '../../../../Loader/Loader';

import s from '../../ModalProgress.module.scss';
export default function VideoPlayer({ src }) {
    const [content, setContent] = useState(false)

    return (
        <div className={s.content_wrapper}>
            <ReactPlayer url={src} playing playsinline muted loop onStart={() => setContent(true)} />
            <AnimatePresence>
                {
                    content ? null : <motion.div className={s.loader}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0 }}
                    >
                        <Loader content />
                    </motion.div>
                }
            </AnimatePresence>
        </div >
    );
}

VideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
};
