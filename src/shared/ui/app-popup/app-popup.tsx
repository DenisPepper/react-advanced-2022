import { buildNames } from 'shared/lib/build-css-class-names/build-css-class-names';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { AppPortal } from 'shared/ui/app-portal/app-portal';
import { ROOT } from 'shared/settings';
import { useTheme } from 'app/providers/theme-provider';
import cls from './app-popup.module.scss';

interface AppPopupProps {
    className?: string;
    children?: ReactNode;
    isOpened?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const DELAY = 300;

export function AppPopup(props: AppPopupProps): JSX.Element {
    const {
        className, children, isOpened, onClose, lazy,
    } = props;

    const { theme } = useTheme();

    const [isClosing, setClosingClassName] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const handleOnClickOverlay = useCallback(() => {
        if (onClose) {
            setClosingClassName(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setClosingClassName(false);
            }, DELAY);
        }
    }, [onClose]);

    const onEscKeyDown = useCallback((evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
            handleOnClickOverlay();
        }
    }, [handleOnClickOverlay]);

    useEffect(
        () => {
            if (isOpened) {
                window.addEventListener('keydown', onEscKeyDown);
                setIsMounted(true);
            }
            return () => {
                window.removeEventListener('keydown', onEscKeyDown);
                clearTimeout(timerRef.current);
                setIsMounted(false);
            };
        },
        [isOpened, onEscKeyDown],
    );

    const handleOnClickContent = (evt: React.MouseEvent) => {
        evt.stopPropagation();
    };

    const popupClassNames = buildNames(
        ['popup', cls.popup, theme, className],
        { [cls.opened]: isOpened, [cls.is_closing]: isClosing },
    );

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <AppPortal container={ROOT}>
            <div className={popupClassNames}>
                {/* eslint-disable jsx-a11y/click-events-have-key-events */}
                {/* eslint-disable jsx-a11y/no-static-element-interactions */}
                <div
                    className={cls.overlay}
                    onClick={handleOnClickOverlay}
                >
                    <div className={cls.content} onClick={handleOnClickContent}>
                        { children }
                    </div>
                </div>
            </div>
        </AppPortal>
    );
}
