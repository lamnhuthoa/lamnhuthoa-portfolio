"use client";

import Image from "next/image";
import {
    RenderImageContext,
    RenderImageProps,
    RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

function renderNextImage(
    { alt = "", title, sizes }: RenderImageProps,
    { photo, width, height }: RenderImageContext,
) {
    return (
        <div
            style={{
                width: "100%",
                position: "relative",
                aspectRatio: `${width} / ${height}`,
            }}
        >
            <Image
                fill
                src={photo}
                alt={alt}
                title={title}
                sizes={sizes}
                placeholder={"blurDataURL" in photo ? "blur" : undefined}
            />
        </div>
    );
}

export interface PhotoGalleryProps {
    photos: Array<{
        src: string;
        width: number;
        height: number;
        alt?: string;
        title?: string;
    }>;
}

export default function PhotoGallery(props: PhotoGalleryProps) {
    const { photos } = props;
    return (
        <RowsPhotoAlbum
            photos={photos}
            render={{ image: renderNextImage }}
            defaultContainerWidth={1200}
            sizes={{
                size: "1168px",
                sizes: [
                    { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
                ],
            }}
        />
    );
}