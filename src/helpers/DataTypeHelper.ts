export class DataTypeHelper {
    static dataTypesById: {
        [key: string]: string
    } = {
        'I': 'Integer',
        'N': 'Number',
        'DC': 'Decimal',
        'F': 'Float',
        'MN': 'Money',
        'BL': 'Boolean',
        'A': 'Characters',
        'VA': 'Variable Characters',
        'LA': 'Long Characters',
        'LVA': 'Long Variable Characters',
        'TXT': 'Text',
        'BT': 'Bytes',
        'MBT': 'Multibyte',
        'D': 'Date',
        'T': 'Time',
        'DT': 'Date & Time',
        'TS': 'Timestamp',
        'BIN': 'Binary',
        'VBIN': 'Variable Binary',
        'LBIN': 'Long Binary',
        '': 'Undefined'
    };

    static allTypes() {
        return this.dataTypesById;
    }

    static getDataTypeWithoutLength = (dataType: string): string => {
        return dataType.replace(/[0-9]/g, '');
    };

    static getLabelForDataType(dataType: string) {
        return this.dataTypesById[DataTypeHelper.getDataTypeWithoutLength(dataType)]
    }

    static buildTypeIdentifier(dataType: string, length: number) {
        if (length === 0) return dataType;

        // Don't know why they append the length to the type, can't change because the model has to be parsable by external tools.
        return this.getDataTypeWithoutLength(dataType) + length.toString();
    }
}