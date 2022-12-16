import Dropdown from '../generics/Dropdown'
import { DropdownItems } from '../generics/DropdownItem'
import { useTranslation } from 'react-i18next'
import { AiFillFileImage, AiFillFileExcel, AiOutlineCloudDownload } from 'react-icons/ai'

interface Props {
    canDownload: boolean
    onDownload: (type: 'image' | 'csv') => void
}

export default function DownloadDropdown({ canDownload, onDownload }: Props): JSX.Element {
    const { t } = useTranslation()

    const items: DropdownItems = [
        {
            label: t('button.download.png'),
            icon: <AiFillFileImage />,
            onClick: () => onDownload('image'),
        },
        {
            label: t('button.download.csv'),
            icon: <AiFillFileExcel />,
            onClick: () => onDownload('csv'),
        },
    ]

    return (
        <Dropdown
            disabled={!canDownload}
            title={t('button.download.')}
            icon={<AiOutlineCloudDownload />}
            items={items}
        />
    )
}
