// IPFS service for storing and retrieving certificate files
export class IPFSService {
  private readonly PINATA_API_KEY = import.meta.env.VITE_PINATA_API_KEY || 'demo-key'
  private readonly PINATA_SECRET = import.meta.env.VITE_PINATA_SECRET || 'demo-secret'
  private readonly PINATA_GATEWAY = 'https://gateway.pinata.cloud/ipfs/'

  async uploadFile(file: File): Promise<string> {
    try {
      // For demo purposes, we'll simulate IPFS upload
      // In production, you would use Pinata, Infura, or direct IPFS
      const formData = new FormData()
      formData.append('file', file)

      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Generate a mock IPFS hash
      const mockHash = 'Qm' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      
      return mockHash
    } catch (error) {
      console.error('IPFS upload failed:', error)
      throw new Error('Failed to upload file to IPFS')
    }
  }

  async uploadMetadata(metadata: any): Promise<string> {
    try {
      // Convert metadata to JSON and upload
      const jsonBlob = new Blob([JSON.stringify(metadata)], { type: 'application/json' })
      const file = new File([jsonBlob], 'metadata.json', { type: 'application/json' })
      
      return await this.uploadFile(file)
    } catch (error) {
      console.error('Metadata upload failed:', error)
      throw new Error('Failed to upload metadata to IPFS')
    }
  }

  getFileUrl(hash: string): string {
    return `${this.PINATA_GATEWAY}${hash}`
  }

  async getMetadata(hash: string): Promise<any> {
    try {
      const response = await fetch(this.getFileUrl(hash))
      if (!response.ok) {
        throw new Error('Failed to fetch metadata')
      }
      return await response.json()
    } catch (error) {
      console.error('Failed to get metadata:', error)
      throw error
    }
  }
}

export const ipfsService = new IPFSService()