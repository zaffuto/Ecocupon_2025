export interface AutoventaConfig {
    adminApi: {
        url: string;
        key: string;
        companyId: number;
    };
    appApi: {
        url: string;
        key: string;
    };
}

export interface Discount {
    id: string;
    percentage: number;
    qrCode: string;
    imageUrl: string;
    description: string;
    validUntil: Date;
}

export interface RecyclingSubmission {
    productImage: string;
    productType: string;
    timestamp: Date;
    status: 'pending' | 'approved' | 'rejected';
}
